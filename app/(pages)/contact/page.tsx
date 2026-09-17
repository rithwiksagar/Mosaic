import Link from "next/link";
import { IoMailOutline } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";

export default function Contact() {
  return (
    <div>
      <h1 className="flex justify-center">Contact</h1>

      <p>
        Have a question, found a bug, want to suggest something, or interested
        in working together? Feel free to reach out.
      </p>

      <h2>Get in touch</h2>

      <p>
        If you find a bug or something isn't working as expected, let me know.
        You can also reach out with feedback, component ideas, collaborations,
        or anything else related to Mosiac.
      </p>

      <div className="flex gap-4">
        <Link
          href="https://x.com/rithwiksagarr"
          className="no-underline flex items-center gap-2 text-neutral-600 hover:text-neutral-800  dark:text-neutral-500 hover:dark:text-neutral-200"
        >
          <RiTwitterXFill className="size-4"/>X
        </Link>
        <Link
          href="mailto:rithwiksagar6@gmail.com"
          className="no-underline flex items-center gap-2 text-neutral-600 hover:text-neutral-800 dark:text-neutral-500 hover:dark:text-neutral-200"
        >
          <IoMailOutline className="size-4"/>Email
        </Link>


      </div>
    </div>
  );
}