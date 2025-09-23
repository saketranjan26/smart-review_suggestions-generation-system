interface ProgressIndicatorProps {
  currentStep: number
}

export function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  const steps = [
    { number: 1, label: "Rating" },
    { number: 2, label: "Photos & Videos" },
    { number: 3, label: "Comment" },
  ]

  return (
    <div className="px-6 py-4 border-b bg-white">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step.number <= currentStep ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                {step.number}
              </div>
              <span className={`text-xs mt-1 ${step.number <= currentStep ? "text-blue-600" : "text-gray-400"}`}>
                {step.label}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 ${step.number < currentStep ? "bg-blue-600" : "bg-gray-200"}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
