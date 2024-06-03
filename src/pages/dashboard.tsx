import React, { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { HiOutlineArrowCircleDown, HiOutlineArrowCircleUp } from 'react-icons/hi';
import { FaDownload, FaCircleDot } from "react-icons/fa6";
import { RiRecordCircleFill } from "react-icons/ri";


const DashboardPage: React.FC = () => {
    type DashboardBoxData = {
        key: string;
        title: string;
        value: string;
        description: string;
        className?: string;
        icon?: IconType;
    };

    const dummyData: DashboardBoxData[] = [
        {
            key: "newProject",
            title: "New Projects",
            value: "94",
            description: "14% Increase",
            className: "bg-[#279CF3] text-white",
            icon: HiOutlineArrowCircleDown,
        },
        {
            key: "teamMember",
            title: "Team Members",
            value: "5,590",
            description: "4% Increase",
            className: "bg-[#66B92E] text-white",
            icon: HiOutlineArrowCircleDown,
        },
        {
            key: "totalBudget",
            title: "Total Budget",
            value: "80,890",
            description: "21 Decrease",
            className: "bg-[#DA932C] text-white",
            icon: HiOutlineArrowCircleUp,
        },
        {
            key: "newCustomers",
            title: "New Customers",
            value: "3",
            description: "13% Decrease",
            className: "bg-[#D65B4A] text-white",
            icon: HiOutlineArrowCircleUp,
        },

    ];

    type DashboardBoxProps = {
        data: DashboardBoxData;
    };

    type DashboardTabelData = {
        key: string;
        Project: string;
        ProjectDetails: string;
        Deadline: string;
        DeadlineDetails: string;
        Leader: string;
        LeaderDetails: string;
        Budget: string;
        BudgetDetails: string;
        Status: String;
        className?: string;
        DeadlineColor?: string;
        BudgetColor?: string;
        statusIcon?: React.ElementType;
        statusIconColor?: string;
        leaderProfilePic?: string;
    };
    const dummyTableData: DashboardTabelData[] = [
        {
            key: "proj1",
            Project: "New Dashboard",
            ProjectDetails: "Google",
            Deadline: "17th 0ct, 15",
            DeadlineDetails: "Overdue",
            Leader: "John Doe",
            LeaderDetails: "UK Design Team",
            Budget: "$15,000",
            BudgetDetails: "Paid",
            Status: "Early Stages",
            DeadlineColor: "text-red-500",
            statusIcon: FaCircleDot,
            statusIconColor: "#0F9ACB",
            leaderProfilePic: "https://via.placeholder.com/32",
        },
        {
            key: "proj2",
            Project: "Landing Page",
            ProjectDetails: "AirBnb",
            Deadline: "2nd Jan, 16",
            DeadlineDetails: "In 6 Days",
            Leader: "Joseph Mullins",
            LeaderDetails: "External Company",
            Budget: "$50,000",
            BudgetDetails: "Invoice Sent",
            Status: "QA",
            statusIcon: FaCircleDot,
            statusIconColor: "#5C5D5F",
            leaderProfilePic: "https://via.placeholder.com/32",
        },
        {
            key: "proj3",
            Project: "UX Consulting",
            ProjectDetails: "Tapdaq.",
            Deadline: "1st Apr, 16",
            DeadlineDetails: "In 4 Months",
            Leader: "Anne Freeman ",
            LeaderDetails: "UX Warriors",
            Budget: "$20,000",
            BudgetDetails: "Paid",
            Status: "Waiting For Client",
            statusIcon: FaCircleDot,
            statusIconColor: "#66B92E",
            leaderProfilePic: "https://via.placeholder.com/32",
        },
        {
            key: "proj4",
            Project: "Small Design Help",
            ProjectDetails: "NASA",
            Deadline: "1st Mar, 16",
            DeadlineDetails: "In 3 Months",
            Leader: "Susan Stewart",
            LeaderDetails: "UK Design Team ",
            Budget: "$20,000",
            BudgetDetails: "Delayed",
            Status: "Finishing",
            BudgetColor: "text-red-500",
            statusIcon: FaCircleDot,
            statusIconColor: "#DA932C",
            leaderProfilePic: "https://via.placeholder.com/32",
        },
        {
            key: "proj4",
            Project: "Small Design Help",
            ProjectDetails: "NASA",
            Deadline: "1st Mar, 16",
            DeadlineDetails: "In 3 Months",
            Leader: "Susan Stewart",
            LeaderDetails: "UK Design Team ",
            Budget: "$20,000",
            BudgetDetails: "Delayed",
            Status: "Finishing",
            BudgetColor: "text-red-500",
            statusIcon: FaCircleDot,
            statusIconColor: "#DA932C",
            leaderProfilePic: "https://via.placeholder.com/32",
        },
        {
            key: "proj4",
            Project: "Small Design Help",
            ProjectDetails: "NASA",
            Deadline: "1st Mar, 16",
            DeadlineDetails: "In 3 Months",
            Leader: "Susan Stewart",
            LeaderDetails: "UK Design Team ",
            Budget: "$20,000",
            BudgetDetails: "Delayed",
            Status: "Finishing",
            BudgetColor: "text-red-500",
            statusIcon: FaCircleDot,
            statusIconColor: "#DA932C",
            leaderProfilePic: "https://via.placeholder.com/32",
        },

    ];


    type DashboardTableDataProps = {
        dataTable: DashboardTabelData;
    };

    const DashboardBox: React.FC<DashboardBoxProps> = ({ data }) => {
        return (
            <div className={` flex flex-col rounded-md p-4  h-full ${data.className || ""}`}>
                <div className="flex justify-between items-center mb-2 ">
                    <h2 className="text-xl font-semibold">{data.title}</h2>
                    {data.icon && <data.icon className="opacity-25 min-w-[50px] min-h-[50px]" />}
                </div>
                <div className='flex flex-col gap-2 flex-grow'>
                    <p className="text-4xl font-medium flex flex-grow ">{data.value}</p>
                    <p className='border-t '>{data.description}</p>
                </div>
            </div>
        );
    };


    const DashboardTable: React.FC<DashboardTableDataProps> = ({ dataTable }) => {
        const StatusIcon = dataTable.statusIcon;
        return (
            <div className='grid grid-cols-6 gap-4 p-4 border-b border-gray-700 hover:bg-[#313D4F] active:bg-[#313d5f]'>
                <div className="">
                    <div className="font-semibold text-white">{dataTable.Project}</div>
                    <div className="text-[#5C6A7E]">{dataTable.ProjectDetails}</div>
                </div>
                <div className="">
                    <div className="font-semibold text-white">{dataTable.Deadline}</div>
                    <div className={`text-[#5C6A7E]`} style={{ color: dataTable.DeadlineColor || '#5C6A7E' }}>
                        {dataTable.DeadlineDetails}
                    </div>
                </div>
                <div className="flex items-center ">
                    {dataTable.leaderProfilePic && (
                        <img src={dataTable.leaderProfilePic} alt="Leader Profile" className="w-8 h-8 rounded-full mr-2" />
                    )}
                    <div className="">
                        <div className="font-semibold text-white">{dataTable.Leader}</div>
                        <div className="text-[#5C6A7E]">{dataTable.LeaderDetails}</div>
                    </div>
                </div>
                <div className="">
                    <div className="font-semibold text-white">{dataTable.Budget}</div>
                    <div className={`text-[#5C6A7E]`} style={{ color: dataTable.BudgetColor || '#5C6A7E' }}>
                        {dataTable.BudgetDetails}
                    </div>
                </div>
                <div className="col-span-2 text-center ">
                    <div className="font-semibold text-[#5C6A7E] flex ">
                        {StatusIcon && <StatusIcon className="min-w-[25px] min-h-[25px] mr-2" style={{ color: dataTable.statusIconColor || '#5C6A7E' }} />}
                        {dataTable.Status}
                    </div>
                </div>
            </div>
        );
    };
    const Dashboard: React.FC = () => {
        return (
            <div>
                <div className="gap-2 items-center justify-center grid-cols-4 grid grid-flow-row max-md:grid-cols-2 max-lg:grid-cols-2 max-sm:grid-cols-1">
                    {dummyData.map((item) => (
                        <DashboardBox key={item.key} data={item} />
                    ))}
                </div>
            </div>
        );
    };

    const DashboardTb: React.FC = () => {
        return (
            <div className="bg-[#273142] p-4">
                <div className="flex flex-col gap-2 text-nowrap ">
                    {dummyTableData.map((item) => (
                        <DashboardTable key={item.key} dataTable={item} />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="bg-[#1B2431] h-full flex justify-center items-center overflow-auto ">
            <div className="h-full w-[70vw] ">
                <div className="p-2 h-auto">
                    <Dashboard />
                </div>
                <div className="h-auto bg-[#273142] rounded-md overflow-auto ">
                    <div className="p-2  rounded-md  mt-1 flex px-4" >
                        <div className='flex flex-row flex-grow items-center w-[50vw] gap-2 px-4 py-2'>
                            <div className=' text-nowrap text-[25px] font-semibold text-white flex flex-row-reverse pl-16'>OnGoing Projects </div>
                            <div className=' w-full  text-lg  text-[#848C96]'>| 32 Project </div>
                        </div>
                        <div className='flex flex-row items-center text-lg '><FaDownload className='text-white' /></div>
                    </div>
                    <div className='bg-[#313D4F] h-10 items-center mt-9 grid grid-flow-row grid-cols-6 px-8'>
                        <div className="font-semibold text-[#5C6A7E]">Project</div>
                        <div className="font-semibold text-[#5C6A7E]">Deadline</div>
                        <div className="font-semibold text-[#5C6A7E]">Leader+Team</div>
                        <div className="font-semibold text-[#5C6A7E]">Budget</div>
                        <div className="font-semibold text-[#5C6A7E]">Status</div>
                        <div className="font-semibold text-[#5C6A7E]"></div>
                    </div>
                    <div className=' text-nowrap overflow-auto' >
                        <DashboardTb />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
