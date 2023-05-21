import ExamplePage from "@/components/Example";


export default function Card() {
  const repository = {
    name: "Candice Wu",
    avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    // Add other data fields here
  };

  return (
    <div>
      {/* Your other page content */}
      <ExamplePage repository={repository} />
    </div>
 );
 }
