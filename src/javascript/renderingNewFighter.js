import FighterView from './view';


class RenderingNewFighter extends FighterView {
    constructor(fighterDetails) {
        super();

        this.create(fighterDetails);
    }


    create(fighterDetails) {
        this.element = this.createElement({tagName: 'div', className: 'fighter'});
        const fighterImage = this.createElement({
                tagName: 'img',
                className: 'fighter-image',
                attributes: {src: fighterDetails.source}
            }),

            progress = this.createProgress(fighterDetails),
            name = this.createElement({tagName: "span", className: "name"});
        name.innerText = fighterDetails.name;
        this.element.append(progress, fighterImage, name)

    }


    createProgress(fighterDetails) {
        const container = this.createElement({tagName: "div", className: "container-progress"}),
            progress = this.createElement({
                tagName: 'progress',
                className: fighterDetails._id,
                attributes: {
                    max: fighterDetails.health,
                    value: fighterDetails.health
                }
            });

        progress.classList.add("progress");
        container.appendChild(progress);

        return container

    }




}

export default RenderingNewFighter;