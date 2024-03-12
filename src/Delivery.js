import { useState } from "react";

import LoaderPage from './Loader/LoaderPage';
import { useEffect } from 'react';
import { Accordion } from "./Accordion/Accordion";

function Delivery() {


	const [stateLoaderThird, setStateLoaderThird] = useState(true)

		useEffect(() => {
			const timer = setTimeout(() => setStateLoaderThird(false), 1000)
			return () => clearInterval(timer)
		}, []);

	return (
		<div className="bg_delivery">
			{stateLoaderThird && <LoaderPage />}

			<Accordion/>
		</div>
	)
}
export default Delivery
