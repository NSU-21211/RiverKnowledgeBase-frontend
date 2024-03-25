export class RiverDTO {
    constructor(label, length, watershedArea, image, origin, administrativeTerritorial, tributaries, mouth, country) {
        this.label = label;
        this.length = length;
        this.watershedArea = watershedArea;
        this.image = image;
        this.origin = origin;
        this.administrativeTerritorial = administrativeTerritorial;
        this.tributaries = tributaries;
        this.mouth = mouth;
        this.country = country;
    }
}