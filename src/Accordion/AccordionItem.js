import { useState } from "react";


export const AccordionItem = ({title, content}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }
  return (
		<div className='main_accordion'>
			<div className={isOpen ? 'active' : 'default'} onClick={handleIsOpen}>
				{title} <div className='arrow'> &#8595;</div>
			</div>
			{isOpen && <div className='content'>{content}</div>}
		</div>
	)
}