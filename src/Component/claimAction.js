import React from 'react';
import { Link } from 'react-router-dom';


const ClaimAction = (props) => {
  return (
    <>
    <div>
      <h1 style={{textAlign: 'center', marginTop: '100px'}}>Choose Option to Claim Your Item</h1>
      <div className="btn-wrapper" style={{display:'flex', justifyContent: 'center'}}>
      <Link to="/pickup" className="left" style={{paddingRight: '10px', paddingTop: '20px'}}>
      <img src= 'https://trello-attachments.s3.amazonaws.com/5cc49a5ee4f4aa7f484c3bb1/970x972/b4efcd1477970e73d0697ed7888d5a8b/Screen_Shot_2019-04-28_at_2.23.51_PM.png' alt="" 
      style={{width: '300px', padding: '20px'}} />
  
      </Link>
   
      <a href="https://www.fedex.com/login/web/jsp/logon.jsp" className="right" style={{paddingLeft: '10px', paddingTop: '20px'}}>
      <img src= 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX///9NFIxAAIY5AINIBorGvNauoMb08Ph3VaU9AIRtRp9LEItKDItIAInx7fV5WaZ/Zajp4/C3qM7LwNuTfLZiOZc0AIDj3OxVHZFcMpT6+PyLcLG+sNKDZqxdLZbWzeObhbuql8Xc1OfPxd5vS5+7rdCJbq+gi75YJpIqAHysmsbGudh+X6hgOJaQdrRcMZSbgb2derjXAAAMcElEQVR4nO2d6YKivBKGIWG0YxIdxK1x39e2z/1f3UkFgYCsik07X54fPYpo6iVLVdYxDI1Go9FoNBqNRqPRaDQajUaj0Wg0Go1Go9FoNBqNRqPRvBvOn/pY/4TADkb1gaevF+gOzDrBr1fYxKZJa8pBKhS6P6GQ9ruNOuh+0x/KQ+vj9ckk0mJaYRVoha9EK6wGrfCVaIXVEFHYbEfI+l47gWbJtGtQOB5ghUFWRMVu9ygclyXTrkFhjytBMeVZCmdM3IK6hhtgbP5NhQpa4R21KaTEI7MevrNCOpp7ZA4xKArnlAF0UFZhvzaFRb6nKFwjeyjJdC8J/BKFrm3HLG9C6VXzED2Ydn0KhyuJcODu6RtcpHW1/dv3feEE+5NIHg52U2A83o3li6mswOeLvLi7pqZdl0K/pTn+MRyOmNes4r28YUvkBYbHnzRQaC8ke2vZGSy33e52OhNX58eGeH2eYTs5YaNGhTfQfIIpqENwlcC43xIuSLh8EW1Lv07Gd1+++ugb9vEMr7rHVXraQiF5haYo6Qr5noi/lrk/TRFIPBlzLDMUeRl5p/Bzabhs49l+sU7w7/mY1SDXqJACJrxhn3B9gkCYV/cY366cPk9Q+CW8Rfs2xst78Hd+jNwQpzaF1LI455bUQIbyg43QxqeyHeKyZZVibwpXuzFwReAPh8eF/Fn4Y+fE4kIh7047pfk7eU4hHXmBtPfmewYcqCywIMoz+oxChX+Oe6+tceDd+tjwf5qkN6O+QhNxK4HEi+GnePekQu9NiwUFlvoNjMhUr+VoKwqdY+QXJ0fvEbujvEmJPjMfBJ+rUDiSsniItOfW+Ls89BYxhcZB1l3RymQ0o4FChkgcMOL+qgIz2aEKhfIJj8YBV3nhVjGbah4ObmMDXqR+MW8R+3KQ7gr9FOhsbsdZIvHDd1cVRCNAnAoUXuENV27tgirkuf51pB56eJF3DwdBXo+E4xpuQtD6JSyd318W6aA/WTZvkWltcpX5pCt0wB0i6dbc7kSwJVKV9HBqW9r2uiKrGSg8HWUme+3RdOR3wK7jxcfdMM5XckyTq9AQVQTnVYECCo2RLJUn17BbBCE0aMpiSsm4uzxYKf5wcpSZsj9e5KWWF+MYS+d/i1Unnrb4vaSgPV+hKMf8UoHCuZw8RYQT0EOWt5jG5HLm716hiGnmXqzWOA4Pnqc4eIZcjfFieIoX1IcVNgk1B0X7alm9pwYO22cCLmjpX6C3PNyqP/V1sr0YBlpR16uwLrt6Ck+n4Sk+ZvD1qEIw1Iuayiq8DkRpJGHrcr5FoAwNTl7iWHoJPjgjKLjE/FTAO44PcLvMSBvLtpgdQel5O3edfTztxxXaWESRBYdnIwpXDqAEy+6yhUT/8Hsf9A97DGPSGRpOBl77aN/enSHrzvvl6S7txxUaIoJEBQdNckf1XbcdLV22XXZsO40nFK5EJvKce27UOW/xhEKjZcXauVTeVaHw1gVDt3dVaBQO3WpWmFSXiikUvXLWKpJKnQo/n1FoiLCDFAnd3lfhqWDoVq/CxBa/oMKmyMSMocrwvrdVKEO3nHES4H1LqdEeFArd3lhhwdDtnRWuSJHQrU6F308qNDZFQre3VrgWmZgbur21wkKh23srhNCtn3PPeyssMur25gohdLsbw4tSq0L6tEI3P3R7c4XGIjd0q1PhrAKFbWyaODN0e3eFMnS7G6dUqVfhU30LjyHOWYH39gqNj5zQ7f0VQuiWtVDt/RUaBxG6Zcx616zQSrhcVmFO6PZLFRafxBYchNdPmEu+UafCA6Us4bJQyDZ/i7P7pKa1SZ1O/J0KTcZLIBf7kN0wOZVfqHCiTMyWgONNYtn+hQpduWygHHIRjkUOCY7xFypM3pCTzbCHYXEBQ3wfD1JrVkgr+zF3acKUPEV4HK2Q/4xCwWSG5Son/KGuaq1ZoVntL8472KuQo3CB5r+l0DDsK4EKSQf+GtB/TiFUSCY0hhHvv6dQMIE4zg9yalZYaH9OeS78X1coesXB4E2dCkda4cNohT+FVvg4WuFP8Z9QWGJnSBm0wp9CK3wcrfCnMLXChymvsLk6TyaT87zsqQmZuKUUNoclTCipcL74Rt4YLSGjsVPZSYclFEZM2J1zTSij0D0xwsPdrJQjsiiwMLcIoHBW5L6GiWMm9HJMKKHw5O1TY1w+QC8djnvV5GMxhV3PBBo1YZxpQmGF9ieS+7rw7NqYnCfdXgvLAxYQr+Lw2EJ52O4TOVqPD2PPhI1nAs+cYiyq0MEWnIHR2iqbXZ0LTILQQeYCj2K4NF/hmkgT+tuwgXGdqTQBL9K/VlChPBYD9eOzq/YUrpOi2//SKZCHZ2nC950JO2nCOPV7xRROBrAl9n5PnWjZOK9CYn4ensEEnGTCigkTUOrBA4UUwpZYiyfPqzb7SG6bfQ6hkGUqXImcYjx5caW7ARPS6koRhU1OTWuU6l474vcH6asDCgEKv7M+FyYwlmrCBUxIaW6KKNxwk1oZ8UNLfM6ecxouy1Z4EUnwDMf3wVPXexVQ6MCSv2j5iM6tCvNMtMiwL58chWt8V0xi07smS1t5WUDhgd0OG/BY7Q8c8UNPSRDqaZFtR+nkKJyxyKJD5zri3PrcKy3DiohnkGhCvsIzMZVGwO5gLk844bgVJjDmJl8UkpJCtkKRhUrUOp8RaYJw/buwYKbufMpX2GImCcKWtQwiKJPLVsJzU5qIUvRMTcxWKIwMV6st5dZ3zwRuBU/ZBROSls/mKmxjZbnffEBh/p/1zQEEiIMg2Ss3UYlzYu4AhZ9pH7aRGS7UWMqD4/Goz2ESm5GgZIpMjJ56cCNXYQOFtbAtZDG0hPvdE8S9A/8RzonJnzn5P1PhFpncr4WOcPzclDPzdo+AC/GLjqiJiZ4gVyFMMA7D15T5b9ojphycQszElXdFcS3KvtI+FLU82AM7oiZv+aLW4omHLRBNPrg+V+EonH4eDoJTd4A2V9YBCvHkidYUFKaumhQm+L5OZKc6G+7AiRG+3p2SFwp5Cl0SZhQclLJQPjsp7/fodlrNgwgVNG2ZPQ7XjHZ4dHPTRan/wpyktiCmUDSQMUSxHyv3qvnUVHb6w4FfKP7dEsCqkLTPzLCOo9iChjUKDzZxkk2wzKjCpIV+fknvx3fuWOEWAu9Is1fhq3DjpawtWri/odoUwk0YhLM7zLApvVtNMKPBQQjwAOn9t6uAhg/ZxrFd6U0UShbtebIJPDzNb/XRigP55udhK36yAw8X4wiF9Pvu2+Xop8DCkohjhyfYIg/9niEs1J/d/Yy48JG5ow1+wg+GoL1Uw98hCdMTpRSVOuCvOCLmCOqhFYudIq4SFT3iJAKUfL8tnaBoLRDNc1CC91yJ7SoGm0E0cI1t2VYXri/Lrnq/MQqXRQq1JgmfkgjJw7a1Yz3lD3NMMH1/CL0YxSUvkBJSpvjDXKbK98RTMoOhkq5IDAUDNNhMWeNbAVclpoHeeOB4e0Q9NlG07A8dEAo7HoJyAWeVov5k2BxOWuLXreCUuWfj0kwmSmQBgRQll7PdHjYO4ACDplXEpXlbSJOBvkXgZJswrMUQwfLgLyscV9jxMscXlgT6ZoEjnkPniQvPLteOojDUgyr6WFsH+8GCkuBuiH+6J0XfwdiNXehEg4eZqh2jIQ08O1P+J7M2ydmZl84cR/aDbTlBnHNEUCO8eCl+oNgjwGleNLDe3WMCm0cQPijF5plhhn50kMSYL6+d8VJ1jDDKQF75f4rBkRDKqLPr7Hed3kl15HKo6NEpzZXoNGXslvLGU1+ZhXJzqImz3C2Mp2ZvkM1kJ7wOSvc07swyswesn+cqTMg6CUo08uyZNVWiN89SBvWFwC+eNpBXIeIpUpQqEbzYQ97exybghJJLiX3g5U4rfgwYIqIpDqk9AxOSRqGKMxc91ORJui04RvzSSuixgqeMkya5Jgg6uc9OYs4JdBRH8axatWS6SXNelbMCIYjGnfpqI014/hkPR9DFJaNlWNrtbh9mZa2nBkpLYM/kgfemMpjf9kxgpJKO2xR728FGnd6+sVxcvrHcH0b6lS6syWQsTeCYeiZMP28mzCpq5+afRI6nWyKcQN6h5RTxF3V7k1n1k0x4oNubhtMfICs4dZ5xzCr88WKsW1ETCG9UG0zZpw+K5YokzDf7wudoV2pCo2P6JrT2T849J9NeO3+ctf36/9v2V5ug0Wg0Go1Go9FoNBqNRqPRaDQajUaj0Wg0Go1Go9FoNJqX8n8ANQiPn9yXLAAAAABJRU5ErkJggg==' alt="" 
      style={{width: '300px', padding: '20px'}} />

      </a>
    </div>
    </div>
    </>
  )
}

export default ClaimAction;