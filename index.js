module.exports = {
  // Map of hooks
  hooks: {},

  // Map of new blocks
  blocks: {
    eel : {
      process : function(block) {
        if (this.output.name !== "ebook") {
            return "";
        }
        var emptyLineCount = block.args[0] || 1;
        var i = 1;
        var body = "";
        while (i <= emptyLineCount) {
          body += "</br> ";
          i++;
        }
        return body;
      }
    }
  },

  // Map of new filters
  filters: {}
};