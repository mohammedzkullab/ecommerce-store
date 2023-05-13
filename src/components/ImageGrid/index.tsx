import { Link } from "components";
import { ImageGridProps, ImageGridType } from "components/types";
import Image from "next/image";

export default function ImageGrid({ files }: ImageGridProps) {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-2"
    >
      {files?.map((file: ImageGridType, index: number) => (
        <li key={index} className="relative">
          <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-w-12 aspect-h-15 ">
            <Link href={file?.link}>
              <Image
                src={file.source}
                alt=""
                width={180}
                height={180}
                className="object-cover w-full h-full pointer-events-none group-hover:opacity-75"
              />
            </Link>
          </div>
          <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none">
            {file.title}
          </p>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">
            {file.size}
          </p>
        </li>
      ))}
    </ul>
  );
}
