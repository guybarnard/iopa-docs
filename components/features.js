import {

  BeakerIcon,

  CloudUploadIcon,

  CursorClickIcon,
  GiftIcon,
  ViewBoardsIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";

export const features = [
  {
    name: "Lightweight",
    description: `As slim as you want, IOPA is a reference pattern that can run with no IOPA code at all`,
    icon: CursorClickIcon,
  },
  {
    name: "Open Source",
    description: `Always free and open-source, include IOPA in commercial and non-commercial projects alike`,
    icon: GiftIcon,
  },
  {
    name: "Serverless",
    description: `The IOPA specs allow applications to be developed independently of the actual platform on which it runs and is particularly well-suited for serverless environments

    `,
    icon: CloudUploadIcon,
  },
  {
    name: "Bot Ready",
    description: `The pattern and reference implementation is particularly well-suited for Bot APIs such as Facebook Messenger, Amazon Alexa Skills, Microsoft Bot Framework, Google Now, and Whatsapp.`,
    icon: BeakerIcon,
  },
  {
    name: "Functional programming",
    description: `Works with functional programming techniques, but also works with sequential programming`,
    icon: ViewBoardsIcon,
  },
  {
    name: "Web standards",
    description: `Includes the latest standards from the WHATWG specifications`,
    icon: CheckCircleIcon,
  },
];

function Features() {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 my-12 sm:grid-cols-3 ">
        {features.map(({ icon: Icon, ...feature }, i) => (
          <div className="flex items-center space-x-4" key={i}>
            <div>
              <Icon
                className="block w-8 h-8"
                style={{ height: 24, width: 24 }}
                aria-hidden="true"
              />
            </div>
            <div>
              <div className="my-0 font-medium dark:text-white">
                {feature.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Features;
