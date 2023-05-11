import React, {useState, useEffect} from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   Avatar,
// } from "@material-tailwind/react";
// import { StarIcon } from "@heroicons/react";

// function ExamplePage({ repository }) {
//     return (
//       <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
//         <CardHeader
//           color="transparent"
//           floated={false}
//           shadow={false}
//           className="mx-0 flex items-center gap-4 pt-0 pb-8"
//         >
//           <Avatar
//             size="lg"
//             variant="circular"
//             src={repository.avatarUrl}
//             alt="candice wu"
//           />
//           <div className="flex w-full flex-col gap-0.5">
//             <div className="flex items-center justify-between">
//               <Typography variant="h5" color="blue-gray">
//                 {repository.name}
//               </Typography>
//               {/* <div className="5 flex items-center gap-0">
//                 <StarIcon className="h-5 w-5 text-yellow-700" />
//                 <StarIcon className="h-5 w-5 text-yellow-700" />
//                 <StarIcon className="h-5 w-5 text-yellow-700" />
//                 <StarIcon className="h-5 w-5 text-yellow-700" />
//                 <StarIcon className="h-5 w-5 text-yellow-700" />
//               </div> */}
//             </div>
//             <Typography color="blue-gray">
//               Frontend Lead @ Google
//             </Typography>
//           </div>
//         </CardHeader>
//         <CardBody className="mb-6 p-0">
//           <Typography>
//             &quot;I found solution to all my design needs from Creative Tim. I use
//             them as a freelancer in my hobby projects for fun! And its really
//             affordable, very humble guys !!!&quot;
//           </Typography>
//         </CardBody>
//       </Card>
//     );
//   }

// export default ExamplePage;



 
export default function Example() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch("/api/repositories/devops"); // Replace with your API endpoint
        const repositories = await response.json();
        setRepositories(repositories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <main className="flex flex-wrap gap-6">
      {repositories.map((repository) => (
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
          <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"> {repository?.name || ""}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400"> {repository?.description || ""}</p>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Stars: {(repository?.stargazers_count)/1000 || ""}K</p>
          <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
              View on GitHub
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns= {repository?.html_url || ""}><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
          </a>
      </div>
      ))}
    </main>
  );
}