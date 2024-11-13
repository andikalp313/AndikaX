"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type User = {
  name: { first: string; last: string };
  picture: { large: string };
};

export default function TestiSection() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch 3 random users from the API
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className=" py-20 px-6 lg:px-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-cyan-400 drop-shadow-lg">
          What Our <span className="text-cyan-400">Robotic Clients</span> Say
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
          Engineered for excellence, delivering top-tier service to every
          client.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-10 lg:grid-cols-3 max-w-7xl mx-auto">
        {users.map((user, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-8 border border-gray-600 rounded-xl shadow-xl max-w-sm mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2 * index,
              duration: 0.6,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 20px rgba(0, 255, 255, 0.3)",
            }}
          >
            <p className="text-cyan-200 italic mb-6 text-lg leading-relaxed">
              {index === 0 &&
                `"AndikaX optimized our AI-driven logistics, bringing unmatched efficiency to our operations."`}
              {index === 1 &&
                `"Precision is key. AndikaX' warehousing solutions ensure our high-tech inventory stays secure and organized."`}
              {index === 2 &&
                `"From start to finish, AndikaX' automated transport solutions make logistics feel like clockwork."`}
            </p>
            <div className="flex items-center">
              <motion.img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                className="w-14 h-14 rounded-full mr-4 border-2 border-cyan-400"
                whileHover={{ rotate: 3 }}
              />
              <div>
                <h4 className="font-semibold text-blue-400 text-lg">
                  {user.name.first} {user.name.last}
                </h4>
                <p className="text-gray-400 text-base">
                  {index === 0 ? "Robotics - IFN" : "Robotics - W&IM"}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
