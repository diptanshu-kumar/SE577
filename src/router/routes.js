const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/repos",
        component: () => import("src/pages/AppPages/RepositoryList.vue"),
      },
      {
        path: "/repoinfo",
        component: () => import("src/pages/AppPages/RepositoryDetails.vue"),
      },
      {
        path: "/login",
        component: () => import("src/pages/AppPages/Login.vue"),
      },
      {
        path: "/about",
        component: () => import("pages/AppPages/AboutMe.vue"),
      },
      {
        path: "/gists",
        component: () => import("src/pages/AppPages/GistDetails.vue"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
