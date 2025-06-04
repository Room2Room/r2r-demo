import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ChallengeComponent from "@/components/ChallengeComponent"
import SolutionComponent from "./components/SolutionComponent"
import SimulationComponent from "./components/SimulationComponent"

function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <img 
          src="/r2r-logo.png" 
          alt="Room2Room Logo" 
          className="h-16 mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-900">React Coding Challenge</h1>
        <p className="text-gray-600">30 minutes</p>
      </div>

      {/* Working Area - This is where candidates build their solution */}
      <div className="max-w-4xl mx-auto mb-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Your Solution</CardTitle>
            <CardDescription>
              Build your component in <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/components/ChallengeComponent.tsx</code>
            </CardDescription>
          </CardHeader>
          <CardContent className="py-12">
            <ChallengeComponent />
          </CardContent>
        </Card>
      </div>

      {/* Instructions */}
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="bg-gray-100">
            <CardTitle className="text-xl">Challenge Requirements</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="bg-gray-50 border-l-4 border-blue-500 p-4">
                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full font-mono mr-4 font-bold min-w-[32px] text-center">1</span>
                  <div>
                    <span className="text-gray-800 font-medium">Display Numbers</span>
                    <p className="text-gray-600 text-sm mt-1">Create a card that displays 8 numbers, each ranging from 1 through 10</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-purple-500 p-4">
                <div className="flex items-start">
                  <span className="bg-purple-500 text-white text-sm px-3 py-1 rounded-full font-mono mr-4 font-bold min-w-[32px] text-center">2</span>
                  <div>
                    <span className="text-gray-800 font-medium">Generate Button</span>
                    <p className="text-gray-600 text-sm mt-1">Create a button that generates 8 new random integers (1 through 10)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-green-500 p-4">
                <div className="flex items-start">
                  <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full font-mono mr-4 font-bold min-w-[32px] text-center">3</span>
                  <div>
                    <span className="text-gray-800 font-medium">Count Duplicates</span>
                    <p className="text-gray-600 text-sm mt-1">Create a function that determines the highest number of equal integers in the set</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-orange-500 p-4">
                <div className="flex items-start">
                  <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full font-mono mr-4 font-bold min-w-[32px] text-center">4</span>
                  <div>
                    <span className="text-gray-800 font-medium">Dynamic Backgrounds</span>
                    <div className="text-gray-600 text-sm mt-1 space-y-1">
                      <p>Change the card background based on duplicates:</p>
                      <ul className="ml-4 space-y-1">
                        <li>• <span className="font-medium">No duplicates:</span> Transparent background</li>
                        <li>• <span className="font-medium">2 of the same:</span> Blue background</li>
                        <li>• <span className="font-medium">3 of the same:</span> Green background</li>
                        <li>• <span className="font-medium">4+ of the same:</span> Yellow background</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-red-500 p-4">
                <div className="flex items-start">
                  <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-mono mr-4 font-bold min-w-[32px] text-center">5</span>
                  <div>
                    <span className="text-gray-800 font-medium">Calculate Probabilities</span>
                    <p className="text-gray-600 text-sm mt-1">Track and display the percentage of each background color after multiple button presses</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
