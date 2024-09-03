import { useEffect, useState } from "react";
import { getAnswerByUserId } from "../../services/answerService";
import { getListTopic } from "../../services/topicService";
import { Link } from "react-router-dom";

function Answers(){
      const [dataAnswers, setDataAnswers] = useState([]);
      useEffect(() => {
            const fetchApi = async () => {
                  const answersByUserId = await getAnswerByUserId();
                  const topics = await getListTopic();

                  let result = [];
                  for (let i=0; i<answersByUserId.length; i++){
                        result.push({
                              ...topics.find(item => item.id = answersByUserId[i].topicId),
                              ...answersByUserId[i]
                              
                        })
                  }
                  setDataAnswers(result.reverse());
            }
            fetchApi();
      },[])
      return (
            <>
            <h2>Danh sách các bài đã luyện tập</h2>
            {dataAnswers.length > 0 && (
                        <table>
                              <thead>
                                    <tr>
                                          <th>Id</th>
                                          <th>Tên chủ đề</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {dataAnswers.map(item => (
                                          <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                      <Link to={"/result/"+item.id}>Xem chi tiết</Link>
                                                </td>
                                          </tr>
                                    ))}

                              </tbody>
                        </table>
                  )}
            
            </>
      )
}
export default Answers;