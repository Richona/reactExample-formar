import { Error404 } from '../components/Error404'
import { Home } from '../components/Home'
import { ProgressBar } from '../components/ProgressBar'
import { ProgressBar2 } from '../components/myPractices/ProgressBar2'
import { ShowHideMessage } from '../components/ShowHideMessage'
import { ShowHideMessage2 } from '../components/myPractices/ShowHideMessage2'
import { StopwatchTimer } from '../components/StopwatchTimer'
import { StopwatchTimer2 } from '../components/myPractices/StopwatchTimer2'

export const routesPublic =  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/showHideMessage",
      element: <ShowHideMessage />,
    },
    {
      path: "/myPractice/showHideMessage",
      element: <ShowHideMessage2 />,
    },
    {
      path: "/progressBar",
      element: <ProgressBar />,
    },
    {
      path: "/myPractice/progressBar",
      element: <ProgressBar2 />,
    },
    {
      path: "/stopwatchTimer",
      element: <StopwatchTimer />,
    },
    {
      path: "/myPractice/stopwatchTimer",
      element: <StopwatchTimer2 />,
    },
    {
      path: "/*",
      element: <Error404 />,
    }
  ]