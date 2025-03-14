const CustomBlock = require('../../src/CustomBlock');

class CoalBlock extends CustomBlock {
    constructor() {
        // ID, ext
        super(0, false);

        this.name = "Coal block";

        this.solidity = this.solidityModes.solid;
        this.speed = 128;

        // textures
        this.top = 112;
        this.side = 112;
        this.bottom = 112;
        
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

module.exports = CoalBlock;