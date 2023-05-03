import { Link } from "components";
import { ImageGridProps, ImageGridType } from "components/types";
import Image from "next/image";

export default function ImageGrid({ files }: ImageGridProps) {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-2"
    >
      {files.map((file: ImageGridType, index: number) => (
        <li key={index} className="relative">
          <div className="group aspect-w-12 aspect-h-15 block w-full overflow-hidden rounded-lg bg-gray-100  ">
            <Link href={file?.link}>
              <Image
                src={file.source}
                alt=""
                width={180}
                height={180}
                className="pointer-events-none object-cover group-hover:opacity-75 h-full w-full"
              />
            </Link>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
            {file.title}
          </p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">
            {file.size}
          </p>
        </li>
      ))}
    </ul>
  );
}
