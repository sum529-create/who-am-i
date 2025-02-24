import { useMutation, useQueryClient } from "@tanstack/react-query"
import Button from "./common/Button"
import { deleteTestResult, updateTestResultVisibility } from "../api/testResults"
import { useState } from "react";
import ShareModal from "./modal/ShareModal";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "../constants/queryKeys";

const TestResultItem = ({data, user}) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = window.location.href
  const [isOpen, setIsOpen] = useState(false);
  const { mutate:deleteMutate } = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      alert('해당 테스트 결과가 삭제되었습니다.')
    },
    onError: (error) => {
      console.error("Failed to delete test result: ", error);
      throw error
    }
  });

  const {mutate:updateMutate} = useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      alert('해당 테스트 결과의 공개 여부가 변경되었습니다.')
    },
    onError: (error) => {
      console.error("Failed to update test result: ", error);
      throw error
    }
  })

  const handleDeleteTestResult = (e) => {
    e.preventDefault()
    e.stopPropagation()
    deleteMutate(data.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: QUERY_KEYS.TEST_RESULT})
      }
    });
  }

  const toggleTestResultVisibility = (e) => {
    e.preventDefault()
    e.stopPropagation();
    updateMutate({id: data.id, visibility:!data.visibility}, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: QUERY_KEYS.TEST_RESULT})
      }
    });
  }

  const moveToPage = (e, pageNm) => {
    e.stopPropagation();
    navigate(pageNm)
  }
  

return (
    <li onClick={(e) => moveToPage(e, `/test-result-page/${data.id}`)} className="flex cursor-pointer flex-col h-full rounded-none sm:rounded-xl bg-white shadow-lg transition-all duration-200 hover:shadow-xl">
      {/* Header Section */}
      <div className="p-3 sm:p-4 border-b border-gray-100">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div onClick={e => moveToPage(e, '/profile')} className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
              {data?.avatar && (
                <img 
                  src={data.avatar} 
                  alt="프로필 사진"
                  className="w-full h-full object-cover" 
                />
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-gray-800 line-clamp-1">
                {data.nickname}
              </span>
              <span className="text-xs text-gray-500">
                {data.createdAt}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {data.visibility ? (
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                공개
              </span>
            ) : (
              <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                비공개
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-grow p-3 sm:p-4">
        <p className="text-gray-700 whitespace-pre-wrap break-words text-sm sm:text-base">
          {data.description}
        </p>
      </div>

      {/* Actions Section */}
      {user.userId === data.userId && (
        <div className="p-3 sm:p-4 border-t border-gray-100">
          <div className="flex justify-between gap-2">
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
              shareUrl={`${location + '/' +data.id}`}
            />
            <div className="flex gap-2">
              <Button onClick={toggleTestResultVisibility}>
                {data.visibility ? '비공개로 전환' : '공개로 전환'}
              </Button>
              <Button onClick={handleDeleteTestResult} variant="danger">
                삭제
              </Button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

export default TestResultItem