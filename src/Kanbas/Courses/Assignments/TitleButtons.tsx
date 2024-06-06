import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import "./Assignment.css";

export default function TitleButtons() {
    return (
        <div className="float-end">

            <span className="rounded-corners-all-around
                                         border-thin
                                         border-solid
                                         small-text
                                         m-2
                                         padding-fat
                                         ">
                40% of Total
            </span>
            <FaPlus style={{ fontSize: '25px' }} />
            <IoEllipsisVertical className="fs-4" />
        </div>
    )
}