import { motion } from "framer-motion";
import { useState } from "react";
import image from './redpanda_640x480.webp';

import Textchange from './textChange.jsx';

function App() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="App">
            <motion.div transition={{ layout: { duration: 1, type: "spring" } }} layout onClick={() => setIsOpen(!isOpen)} className="card">

                <motion.h2 layout="position" className="heading"> panda </motion.h2>

                {isOpen && (
                    <motion.div className="expand">

                        <img src={image} className="image" alt="image" />

                        <p className="strongText">
                            $299
                        </p>

                        <p className="textChange">
                            <Textchange />
                        </p>

                        <div className="button">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => null}
                            >
                                Add to cart
                            </motion.button>
                        </div>

                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}

export default App;
