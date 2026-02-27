// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";
// import { cn } from "@/lib/utils";
// import { title } from "process";
// import { create } from "domain";
// // cn lib-s yaagaaaad duudaj oruulj ireed bna

// const mockArticles = [
//   { id: "1", title: "Genghis Khan", createdAt: "2024-02-23" },
//   { id: "2", title: "Figma ашиглах заавар", createdAt: "2024-02-20" },
//   { id: "3", title: "Санхүүгийн шийдвэрүүд", createdAt: "2024-02-18" },
// ];

// export function AppSidebar() {
//   const pathname = usePathname();
//   return (
//     <Sidebar collapsible="icon" className="sticky">
//       <SidebarHeader className="flex flex-row items-center justify-between p-4">
//         <h2 className="font-semibold text-lg group-data-[collapsible=icon]:hidden">
//           History
//         </h2>
//         <SidebarTrigger />
//       </SidebarHeader>

//       <SidebarContent className="p-4">
//         {mockArticles.length === 0 ? (
//           <p className="text-gray-500 text-sm group-data-[collapsible=icon]:hidden">
//             No articles yet
//           </p>
//         ) : (
//           <div>
//             {mockArticles.map((article) => (
//               <Link
//                 key={article.id}
//                 href={`/article/${article.id}`}
//                 className={cn(
//                   "block px-3 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors",
//                   pathname === `/article/${article.id}` &&
//                     "bg-gray-100 font-medium",
//                 )}
//               >
//                 {article.title}
//               </Link>
//             ))}
//           </div>
//         )}
//       </SidebarContent>

//       <SidebarFooter />
//     </Sidebar>
//   );
// }

"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";

type Article = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

// Огноог текст болгох функц
function getTimeAgo(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);

  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInDays === 0) {
    return "Today";
  } else if (diffInDays === 1) {
    return "Yesterday";
  } else if (diffInDays < 30) {
    return `${diffInDays} days ago`;
  } else if (diffInMonths < 12) {
    return diffInMonths === 1 ? "1 month ago" : `${diffInMonths} months ago`;
  } else {
    return diffInYears === 1 ? "1 year ago" : `${diffInYears} years ago`;
  }
}

// Article-уудыг огноогоор бүлэглэх
function groupArticlesByDate(articles: Article[]) {
  const groups: { [key: string]: Article[] } = {};

  articles.forEach((article) => {
    const timeAgo = getTimeAgo(article.createdAt);

    if (!groups[timeAgo]) {
      groups[timeAgo] = [];
    }
    groups[timeAgo].push(article);
  });

  // Object-ийг array болгох
  return Object.entries(groups).map(([label, articles]) => ({
    label,
    articles,
  }));
}

export function AppSidebar() {
  const pathname = usePathname();

  // Эхлээд хоосон array (Server, Client аль аль дээр ижил)
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Client дээр localStorage-аас авах
  useEffect(() => {
    const data = localStorage.getItem("articles");
    if (data) {
      try {
        setArticles(JSON.parse(data));
      } catch (e) {
        console.error("Error parsing articles:", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // pathname өөрчлөгдөхөд дахин авах
  useEffect(() => {
    const data = localStorage.getItem("articles");
    if (data) {
      setArticles(JSON.parse(data));
    }
  }, [pathname]);

  // Article устгах
  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const updatedArticles = articles.filter((a) => a.id !== id);
    setArticles(updatedArticles);
    localStorage.setItem("articles", JSON.stringify(updatedArticles));
  };

  const groupedArticles = groupArticlesByDate(articles);

  return (
    <Sidebar collapsible="icon" className="sticky top-0 ">
      <SidebarHeader className="flex flex-row items-center justify-between p-4">
        <h2 className="font-semibold text-lg group-data-[collapsible=icon]:hidden">
          History
        </h2>
        <SidebarTrigger />
      </SidebarHeader>

      <SidebarContent className="px-4 group-data-[collapsible=icon]:hidden">
        {articles.length === 0 ? (
          <p className="text-gray-500 text-sm">No articles yet</p>
        ) : (
          <div className="space-y-4">
            {groupedArticles.map((group) => (
              <div key={group.label}>
                {/* Огнооны label */}
                <p className="text-xs text-gray-400 mb-2">{group.label}</p>

                {/* Article жагсаалт */}
                <div className="space-y-1">
                  {group.articles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/article/${article.id}`}
                      className={cn(
                        "group flex items-center justify-between px-3 py-2 rounded-sm text-sm  hover:bg-gray-100 transition-colors hover:border",
                        pathname === `/article/${article.id}` &&
                          "bg-gray-100 font-medium",
                      )}
                    >
                      <span className="truncate">{article.title}</span>

                      {/* Delete button - hover дээр харагдана */}
                      <button
                        onClick={(e) => handleDelete(article.id, e)}
                        className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded transition-opacity"
                      >
                        <Trash2 className="w-4 h-4 text-gray-500" />
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
