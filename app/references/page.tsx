import Markdown from "react-markdown";

export default function References() {
    return (
        <div className="ustify-center font-mono p-20">
            <p className="text-bold text-lg pl-20">References</p>
            <p className="">
                <Markdown>{`
* Agricultural Biotechnology [Fact sheet]. (2024, July 9). U.S. Food and Drug Administration. 
     Retrieved December 22, 2024, from https://www.fda.gov/food/consumers/agricultural-biotechnology 
* GMOs! [Video]. (2017, August 4). YouTube. https://youtube.com/watch?v=-b_Un-lGSWo 
* GMOs are Nothing New: Plant Breeding & Gene Editing [Video]. (2023, August 10). PBS. 
     https://www.pbs.org/video/gmos-are-nothing-new-plant-breeding-gene-editing-sqsp6p/`}
                </Markdown>
            </p>
        </div>
    )
}