
import { list } from "./list";
import './Accordion.css';
import { AccordionItem } from "./AccordionItem";


export const Accordion = () => {
  return(
    <div>
      {list.map((item, index) =>
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
      )}
    </div>
  )
}