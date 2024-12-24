import Markdown from "react-markdown";

export default function References() {
  return (
    <div className="font-serif p-20">
      <p className="flex justify-center font-bold">References</p>
      <Markdown>
        {`
*Agricultural Biotechnology* \[Fact sheet\]. (2024, July 9). U.S. Food and Drug Administration. Retrieved December 22, 2024, from https://www.fda.gov/food/consumers/agricultural-biotechnology  
Aue, C. (2017, October 3). *Gene Flow and Coexistence*. University of Connecticut. Retrieved December 23, 2024, from https://gmo.uconn.edu/topics/gene-flow-and-coexistence/  
*Cloning Insulin*. (2016, April 7). Genentech. Retrieved December 23, 2024, from https://www.gene.com/stories/cloning-insulin  
*Food, genetically modified*. (2014, May 1). World Health Organization. Retrieved December 22, 2024, from https://www.who.int/news-room/questions-and-answers/item/food-genetically-modified  
Funk, C., & Kennedy, B. (2016, December 1). *The New Food Fights: U.S. Public Divides Over Food Science* \[Data set\]. Pew Research Center. https://www.pewresearch.org/science/2016/12/01/the-new-food-fights/  
*GMOs\!* \[Video\]. (2017, August 4). YouTube. https://youtube.com/watch?v=-b\_Un-lGSWo  
*GMOs are Nothing New: Plant Breeding & Gene Editing* \[Video\]. (2023, August 10). PBS. https://www.pbs.org/video/gmos-are-nothing-new-plant-breeding-gene-editing-sqsp6p/  
*International Science Survey 2019-2020* \[Data set\]. (2020, September 29). Pew Research Center. https://www.pewresearch.org/science/wp-content/uploads/sites/16/2020/09/PS\_2020.09.29\_international-science\_TOPLINE.pdf
`}
      </Markdown>
    </div>
  );
}
