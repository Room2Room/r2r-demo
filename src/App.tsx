import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ChallengeComponent from "@/components/ChallengeComponent"

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
                    <p className="text-gray-600 text-sm mt-1">Create a card that displays 8 numbers, each ranging from 0 through 9</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-purple-500 p-4">
                <div className="flex items-start">
                  <span className="bg-purple-500 text-white text-sm px-3 py-1 rounded-full font-mono mr-4 font-bold min-w-[32px] text-center">2</span>
                  <div>
                    <span className="text-gray-800 font-medium">Generate Button</span>
                    <p className="text-gray-600 text-sm mt-1">Create a button that generates 8 new random integers (0 through 9)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-green-500 p-4">
                <div className="flex items-start">
                  <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full font-mono mr-4 font-bold min-w-[32px] text-center">3</span>
                  <div>
                    <span className="text-gray-800 font-medium">Sum the Numbers</span>
                    <p className="text-gray-600 text-sm mt-1">Calculate and display the sum of all 8 numbers</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-orange-500 p-4">
                <div className="flex items-start">
                  <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full font-mono mr-4 font-bold min-w-[32px] text-center">4</span>
                  <div>
                    <span className="text-gray-800 font-medium">Dynamic Backgrounds</span>
                    <div className="text-gray-600 text-sm mt-1 space-y-1">
                      <p>Change the card background based on the sum range:</p>
                      <ul className="ml-4 space-y-1">
                        <li>• <span className="font-medium">Sum 0-18:</span> Red background</li>
                        <li>• <span className="font-medium">Sum 19-36:</span> Blue background</li>
                        <li>• <span className="font-medium">Sum 37-54:</span> Green background</li>
                        <li>• <span className="font-medium">Sum 55-72:</span> Yellow background</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-red-500 p-4">
                <div className="flex items-start">
                  <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-mono mr-4 font-bold min-w-[32px] text-center">5</span>
                  <div>
                    <span className="text-gray-800 font-medium">Track Results</span>
                    <p className="text-gray-600 text-sm mt-1">Count and display how many times each background color appears after multiple button presses</p>
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
