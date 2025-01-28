import CreateWill from "../../components/CreateWill"

export default function CreateWillPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-display text-primary mb-8 text-center">Create Your Will</h1>
        <CreateWill />
      </div>
    </div>
  )
}

