module.exports = {
  // Map of hooks
  hooks: {},

  // Map of new blocks
  blocks: {
    pel : {
      process : function(block) {
        var emptyLineCount = block.args[0] || 1;
        var i = 1;
        var body = ""
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