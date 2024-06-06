import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from 'react-icons/bs';
import GreenCheckmark from "./GreenCheckmark";
export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlus  style={{ fontSize: '30px' }} />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}


