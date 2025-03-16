import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SettingsModal = ({ onClose }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        "Notifications", "Navigation", "Home", "Appearance", "Messages & media",
        "Language & region", "Accessibility", "Mark as read", "Audio & video",
        "Connected accounts", "Privacy & visibility", "Advanced"
    ];

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 p-4">
            <div className="bg-gray-800 text-white w-full max-w-lg md:max-w-2xl lg:max-w-3xl h-auto max-h-[90%] rounded-lg shadow-xl overflow-hidden relative">
                
                {/* Animate Between Sidebar and Content */}
                <AnimatePresence mode="wait">
                    {!selectedCategory ? (
                        <motion.div 
                            key="settings-list"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="p-6"
                        >
                            <h2 className="text-lg font-semibold mb-4">Settings</h2>
                            <ul className="space-y-2">
                                {categories.map((category) => (
                                    <li
                                        key={category}
                                        className="p-3 cursor-pointer rounded hover:bg-gray-700"
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-end mt-6">
                                <button
                                    onClick={onClose}
                                    className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="settings-detail"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="p-6"
                        >
                            <div className="flex items-center mb-4">
                                <button 
                                    className="mr-3 p-2 bg-gray-700 rounded-full hover:bg-gray-600"
                                    onClick={() => setSelectedCategory(null)}
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <h3 className="text-xl font-semibold">{selectedCategory}</h3>
                            </div>
                            <p className="text-gray-300">Settings options for {selectedCategory} will appear here.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SettingsModal;
