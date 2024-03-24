import dynamic from "next/dynamic";

export default {
    About: dynamic(() => import("./about/index.tsx")),
    Career: dynamic(() => import("./career/index.tsx")),
    Projects: dynamic(() => import("./projects/index.tsx")),
    Skills: dynamic(() => import("./skills/index.tsx")),
};
