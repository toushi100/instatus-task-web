import React from "react";
import Image from "next/image";
import arrowRight from "../../public/vector-stroke.svg";
export function TableRow() {
  return (
    <tbody>
      <tr className="">
        <th scope="row" className="px-6 py-4  regular">
          Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4 regular">Silver</td>
        <td className="px-6 py-4 regular">Laptop</td>
        <td className="justify-items-end">
          <Image
            src="/vector-stroke.svg"
            alt="arrow-right"
            width={9}
            height={14}
          />
        </td>
      </tr>
    </tbody>
  );
}
