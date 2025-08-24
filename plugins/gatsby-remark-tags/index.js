const visit = require(`async-unist-util-visit`);

const matchesProtocol = (value) => {
  return value.startsWith(`tags:`);
};

const parseProtocol = (value) => {
  const params = value.replace(`tags:`, ``);
  return params;
};

const getNodeHtmlOptions = (pluginOptions, params) => {
  const options = {
    ...pluginOptions,
    params,
  };
  return options;
};

const getNodeHtml = (options) => {
  const { className, params } = options;
  const tags = params
    .split(`,`)
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);
  if (tags.length === 0) return ``;
  const tagsHtml = tags
    .map(
      (tag) =>
        `<span class="tag">${tag}</span>`
    )
    .join(` `);
  return `<span class="${className}">${tagsHtml}</span>`;
};

module.exports = async ({ markdownAST }, pluginOptions) => {
  return visit(markdownAST, `inlineCode`, (node) => {
    const value = node.value.toString();
    if (matchesProtocol(value)) {
      const params = parseProtocol(value);
      const options = getNodeHtmlOptions(pluginOptions, params);
      const html = getNodeHtml(options);
      node = Object.assign(node, {
        type: `html`,
        value: html,
      });
    }
    return markdownAST;
  });
};