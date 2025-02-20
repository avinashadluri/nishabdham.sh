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
        <a href="/comments" className="hover:text-blue-500 transition-colors">
          అభిప్రాయాలు
        </a>
      </div>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s",
    };
  },
};

export default themeConfig;
