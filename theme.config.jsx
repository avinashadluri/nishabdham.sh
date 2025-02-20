const themeConfig = {
  logo: <h3 style={{ fontSize: "22px", fontWeight: 700 }}>నిశ్శబ్దం</h3>,
  footer: {
    text: "© నిశ్శబ్దం",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  search: {
    component: null,
  },
  navbar: {
    extraContent: (
      <div className="flex gap-4">
        <a
          href="mailto:nishabdham.sh@gmail.com"
          className="hover:text-blue-500 transition-colors"
        >
          స్పందన
        </a>
      </div>
    ),
  },
};

export default themeConfig;
