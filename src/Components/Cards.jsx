import { useState } from "react";
import Card from "./Card"

function Cards(props){
    let courses = props.courses;
    const category = props.category;
    const [likedCourses,setLikedCourses] = useState([]);
    function getCourses() {
        if (category === "All") {
            let allCourses = [];
            Object.values(props.courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        }
        else
        {
            return courses[category];
        }
    }


    return(<div className="flex flex-wrap justify-center gap-4 mb-4">
       {
        getCourses().map((course)=>{
            return <Card course={course} key={props.courses.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />;
        })
       }
    </div>);
}

export default Cards;