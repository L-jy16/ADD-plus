import React from 'react'
import ScoreSide from './ScoreSide'
import { LuSearch } from "react-icons/lu";

const Score = () => {
    return (
        <div className="score__Wrap">
            <ScoreSide />
            <div className='main'>
                <div className="score_title">
                    <h3>전체 성적 비교</h3>
                </div>

                <div className="score_cont">
                    <table>


                        <tr>
                            <td>비교 유형</td>
                            <th>
                                <div className='check_wrap'>
                                    <label className="checkCont">입결 비교
                                        <input type="radio" checked="checked" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="checkCont">수험생 비교
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td>대학</td>
                            <th>
                                <div className="college_wrap">
                                    <input type="text" placeholder='대학명을 입력해주세요' />
                                    <LuSearch />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td>학과</td>
                            <th>
                                <div className="depart">
                                    <div className='depart_wrap'>
                                        <p className='depart_title'>학과 선택</p>
                                        <ul>
                                            <li className='active'>심리학</li>
                                            <li>사회학</li>
                                            <li>정치외교과</li>
                                            <li>국제학</li>
                                            <li>아동 가족학</li>
                                            <li>정치외교과</li>
                                            <li>유아교육과</li>
                                            <li>패션디자인과</li>
                                            <li>경제학과</li>
                                            <li>심리학</li>
                                            <li>사회학</li>
                                            <li>정치외교과</li>
                                            <li>국제학</li>
                                            <li>아동 가족학</li>
                                            <li>정치외교과</li>
                                            <li>유아교육과</li>
                                            <li>패션디자인과</li>
                                            <li>경제학과</li>
                                            <li>심리학</li>
                                            <li>사회학</li>
                                            <li>정치외교과</li>
                                            <li>국제학</li>
                                            <li>아동 가족학</li>
                                            <li>정치외교과</li>
                                            <li>유아교육과</li>
                                            <li>패션디자인과</li>
                                            <li>경제학과</li>
                                        </ul>
                                    </div>
                                    <div className='type_wrap'>
                                        <p className='depart_title'>전형 선택</p>
                                        <ul>
                                            <li>심리학</li>
                                            <li>사회학</li>
                                            <li>정치외교과</li>
                                            <li className='active'>국제학</li>
                                            <li>아동 가족학</li>
                                            <li>정치외교과</li>
                                            <li>유아교육과</li>
                                            <li>패션디자인과</li>
                                            <li>경제학과</li>
                                            <li>심리학</li>
                                            <li>사회학</li>
                                            <li>정치외교과</li>
                                            <li>국제학</li>
                                            <li>아동 가족학</li>
                                            <li>정치외교과</li>
                                            <li>유아교육과</li>
                                            <li>패션디자인과</li>
                                            <li>경제학과</li>
                                            <li>심리학</li>
                                            <li>사회학</li>
                                            <li>정치외교과</li>
                                            <li>국제학</li>
                                            <li>아동 가족학</li>
                                            <li>정치외교과</li>
                                            <li>유아교육과</li>
                                            <li>패션디자인과</li>
                                            <li>경제학과</li>
                                        </ul>
                                    </div>
                                </div>
                            </th>
                        </tr>

                        <tr>
                            <td>성적</td>
                            <th>
                                <table className='score_wrap'>
                                    <tr>
                                        <td colSpan={2}>1학년</td>
                                        <td colSpan={2}>2학년</td>
                                        <td colSpan={2}>3학년</td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div>
                                                1학기<button className='active'>입력</button>
                                            </div>
                                        </th>
                                        <th>
                                            <div>
                                                2학기<button>입력</button>
                                            </div>
                                        </th>
                                        <th>
                                            <div>
                                                1학기<button>입력</button>
                                            </div>
                                        </th>
                                        <th>
                                            <div>
                                                2학기<button>입력</button>
                                            </div>
                                        </th>
                                        <th>
                                            <div>
                                                1학기<button>입력</button>
                                            </div>
                                        </th>
                                        <th>
                                            <div>
                                                2학기<button>입력</button>
                                            </div>
                                        </th>
                                    </tr>
                                </table>

                                <div className="score_cont">
                                    <p className="score_choice_title">1학년 1학기</p>
                                    <div className="score_select">
                                        <select name="" id="">
                                            <option value="">2024 학년도 (현재 고3)</option>
                                            <option value="">2024 학년도 (현재 고3)</option>
                                            <option value="">2024 학년도 (현재 고3)</option>
                                            <option value="">2024 학년도 (현재 고3)</option>
                                            <option value="">2024 학년도 (현재 고3)</option>
                                        </select>
                                    </div>
                                </div>

                                <table className="score_list">
                                    <tr>
                                        <td>번호</td>
                                        <td>교과종류 구분</td>
                                        <td>교과</td>
                                        <td colSpan="2">과목</td>
                                        <td>단위수</td>
                                        <td>석차등급</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>1</th>
                                        <th>
                                            <div>
                                                <select name="" id="">
                                                    <option value="">국어1</option>
                                                    <option value="">수학1</option>
                                                    <option value="">영어1</option>
                                                    <option value="">사회1</option>
                                                </select>
                                            </div>
                                        </th>
                                        <th>
                                            <div>
                                                <select name="" id="">
                                                    <option value="">국어1</option>
                                                    <option value="">수학1</option>
                                                    <option value="">영어1</option>
                                                    <option value="">사회1</option>
                                                </select>
                                            </div>
                                        </th>
                                        <th>
                                            <div>
                                                <select name="" id="">
                                                    <option value="">국어1</option>
                                                    <option value="">수학1</option>
                                                    <option value="">영어1</option>
                                                    <option value="">사회1</option>
                                                </select>
                                            </div>
                                        </th>
                                        <th>
                                            <div>
                                                <input type='text' />
                                            </div>
                                        </th>
                                        <th>
                                            <div>
                                                <input style={{ width: "100%" }} type='text' />
                                            </div>
                                        </th>
                                        <th>
                                            <div>
                                                <input style={{ width: "100%" }} type='text' />
                                            </div>
                                        </th>
                                        <th>
                                            <button>삭제하기</button>
                                        </th>
                                    </tr>
                                </table>
                            </th>
                        </tr>


                    </table>
                </div>
            </div>
        </div>
    )
}

export default Score