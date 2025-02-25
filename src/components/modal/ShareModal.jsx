import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { Fragment } from 'react'
import { toast } from 'react-toastify'

const ShareModal = ({ isOpen, onClose, shareUrl }) => {
  const onTextCopy = () => {
    try {
      window.navigator.clipboard.writeText(shareUrl)
      toast.success('텍스트가 클립보드에 복사되었습니다.')
    } catch (error) {
      console.error(error);
      toast.error('텍스트 복사가 실패하였습니다.')
    }
  }
  const sharedFaceBook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`)
  }
  const sharedKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: "Who Am I", // 제목
        description: '두근두근 당신의 MBTI는?',
        link: {
          webUrl: shareUrl, // 웹 링크
          mobileWebUrl: shareUrl, // 모바일 웹 링크
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            webUrl: shareUrl,
            mobileWebUrl: shareUrl,
          },
        },
      ],
    });
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* 배경 오버레이 */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"/>
        </TransitionChild>

        {/* 모달 */}
        <div className="fixed inset-0 overflow-y-auto" onClick={(e) => e.stopPropagation()} >
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-2xl font-bold text-center mb-6"
                >
                  SNS 링크 공유
                </DialogTitle>

                {/* 공유 버튼들 */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <button onClick={onTextCopy} className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">링크복사</span>
                  </button>
                  <button onClick={sharedFaceBook} className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-sm">페이스북</span>
                  </button>
                  <button onClick={sharedKakao} className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.707 4.8 4.27 6.054-.188.702-.682 2.545-.78 2.94-.123.49.178.483.376.351.155-.103 2.466-1.675 3.464-2.353.541.08 1.1.123 1.67.123 4.97 0 9-3.186 9-7.115C21 6.185 16.97 3 12 3"/>
                    </svg>
                    <span className="text-sm">카카오톡</span>
                  </button>
                </div>

                {/* 공유 링크 */}
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="font-semibold mb-2">공유 링크</h3>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={shareUrl} 
                      readOnly 
                      className="flex-1 bg-white px-3 py-2 rounded-lg text-sm border border-gray-200"
                    />
                    <button onClick={onTextCopy} className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-colors">
                      복사
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ShareModal