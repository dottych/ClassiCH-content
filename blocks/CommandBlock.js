const CustomBlock = require('../../src/CustomBlock');

class CommandBlock extends CustomBlock {
    constructor() {
        // ID, ext
        super(0, false);

        this.name = "Command block";

        this.solidity = this.solidityModes.solid;
        this.speed = 128;

        // textures
        this.top = 92;
        this.side = 92;
        this.bottom = 92;
        
        this.transmitLight = false;

        this.sound = this.sounds.metal;

        this.brightness = 0;
        this.isLamp = false;
        
        this.height = 16;
        this.drawMode = this.drawModes.opaque;

        this.fogDensity = 0;
        this.fogR = 255;
        this.fogG = 255;
        this.fogB = 255;
    }
}

module.exports = CommandBlock;