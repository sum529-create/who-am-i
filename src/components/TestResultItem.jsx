import { useMutation, useQueryClient } from "@tanstack/react-query"
import Button from "./common/Button"
import { deleteTestResult, updateTestResultVisibility } from "../api/testResults"

const TestResultItem = ({data, user}) => {
  const queryClient = useQueryClient();
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

  const handleDeleteTestResult = () => {
    deleteMutate(data.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['testResult']})
      }
    });
  }

  const toggleTestResultVisibility = () => {
    updateMutate({id: data.id, visibility:!data.visibility}, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['testResult']})
      }
    });
  }

  console.log(user.id, " ", data.userId );
  

  return (
    <li className="flex flex-col rounded-2xl bg-[darkgray] p-4 break-all gap-2">
      <div className="header-wrapper">
        <div className="user-area flex items-center gap-2 justify-between">
          <div className="left-side flex gap-4 items-center">
            <div className="user-profile w-[50px] h-[50px] bg-black rounded-full overflow-hidden">
              {
                data?.avatar && <img src={data?.avatar} alt="프로필 사진" />
              }
            </div>
            <span>{data.nickname}</span>
          </div>
          <div className="right-side">
            <span>{data.createdAt}</span>
          </div>
        </div>
      </div>
      <div className="body-wrapper">
        <p className="keep-all">{data.description}</p>
      </div>
      {
        user.id === data.userId &&
        <div className="footer-wrapper flex justify-end">
          <div className="actions-wrapper flex gap-2">
            <Button onClick={toggleTestResultVisibility}>비공개로 전환</Button>
            <Button onClick={handleDeleteTestResult} variant="danger">삭제</Button>
          </div>
        </div>
      }
    </li>
  )
}

export default TestResultItem