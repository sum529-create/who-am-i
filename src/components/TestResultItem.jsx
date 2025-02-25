import { useMutation, useQueryClient } from "@tanstack/react-query"
import Button from "./common/Button"
import { deleteTestResult, updateTestResultVisibility } from "../api/testResults"
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "../constants/queryKeys";
import { toast } from "react-toastify";
import ShareButton from "./common/ShareButton";

const TestResultItem = ({data, user}) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate:deleteMutate } = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      toast.success('해당 테스트 결과가 삭제되었습니다.');
    },
    onError: (error) => {
      console.error("Failed to delete test result: ", error);
      toast.error('삭제에 실패했습니다.');
    }
  });

  const {mutate:updateMutate} = useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      toast.success('해당 테스트 결과의 공개 여부가 변경되었습니다.');
    },
    onError: (error) => {
      console.error("Failed to update test result: ", error);
      toast.error('공개 여부 변경에 실패했습니다.');
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
            <ShareButton id={data.id}/>
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