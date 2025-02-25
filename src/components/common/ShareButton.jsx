import useAuthStore from "../../zustand/authStore";
import ShareModal from "../modal/ShareModal"

const ShareButton = ({id, noUrl=false}) => {
  const origin = window.location.origin
  const location = window.location.href
  const {isOpen, setIsOpen, selTestId} = useAuthStore();
  const shareUrl = noUrl 
  ? `${origin}/test-result-page/${selTestId}`
  : (id ? `${location}/${id}` : location);
  
  return (
    <>
      <button 
        className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(true)
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
      </button>
      {/* 공유하기 모달창 */}
      <ShareModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        shareUrl={shareUrl}
      />
    </>
  )
}

export default ShareButton