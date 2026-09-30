type Prop = {
  prop: string;
  type: string;
  default?: string;
  description: string;
};

interface PropsTableProps {
  title: string;
  data: Prop[];
}

export default function PropsTable({ title, data }: PropsTableProps) {
  if (data.length === 0) return null;

  return (
    <div className="mt-4">
      <h6 className="m-0 text-md font-normal font-mono text-neutral-700 dark:text-neutral-300">
        {title}
      </h6>

      <div className="overflow-x-auto">
        <div className="inline-block overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
          <div className="w-198 text-left">
            <div className="grid grid-cols-[minmax(7rem,0.9fr)_minmax(10rem,1.2fr)_minmax(7rem,0.9fr)_minmax(18rem,2fr)] border-b border-neutral-200 bg-neutral-200/50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-500 py-2">
              <span className="px-4 py-1.5 text-sm font-medium">Prop</span>
              <span className="px-4 py-1.5 text-sm font-medium">Type</span>
              <span className="px-4 py-1.5 text-sm font-medium">Default</span>
              <span className="px-4 py-1.5 text-sm font-medium">
                Description
              </span>
            </div>

            {data.map((item) => (
              <div
                key={item.prop}
                className="grid grid-cols-[minmax(7rem,0.9fr)_minmax(10rem,1.2fr)_minmax(7rem,0.9fr)_minmax(18rem,2fr)] items-start border-b border-neutral-200 last:border-none dark:border-neutral-800"
              >
                <span className="px-4 py-2 font-mono text-sm font-normal text-neutral-600 dark:text-neutral-300">
                  {item.prop}
                </span>

                <span className="min-w-0 px-4 py-2">
                  <span className="inline-flex max-w-full whitespace-normal wrap-anywhere rounded-md bg-neutral-200/60 px-2 py-0.5 font-mono text-sm font-normal text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                    {item.type}
                  </span>
                </span>

                <span className="px-4 py-2">
                  {item.default ? (
                    <span className="font-mono text-sm font-normal text-neutral-600 dark:text-neutral-300">
                      {item.default}
                    </span>
                  ) : (
                    <span className="font-normal text-neutral-700 dark:text-neutral-300">
                      —
                    </span>
                  )}
                </span>

                <span className="px-4 py-2 text-sm font-normal text-neutral-700 dark:text-neutral-300">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
