import suryansh from "../../assets/suryansh.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const ProjectCard = ({ title, main }) => {
  return (
    <>
      <div className="p-3 md:p-6 flex flex-col bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
        <img className="p-4" src={""} alt="bannerimage" />
        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
          {title}
        </h3>
        <p className="px-4 text-sm md:text-base leading-tight py-2">{main}</p>
        <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4 ">
          <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Demo
          </button>
          <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Source Code
          </button>
        </div>
      </div>
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img
            src="https://docs.material-tailwind.com/img/team-3.jpg"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <i className="fab fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProjectCard;
