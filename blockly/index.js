function init() {
  const toolbox = {
    kind: 'flyoutToolbox',
    contents :[
      {
        kind: 'block',
        type: 'text_print'
      }
    ]
  };
  Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    horizontalLayout: true,
    zoom: {
      startScale: 3.0
    }
  });
}
