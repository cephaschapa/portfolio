import Wrapper from "./Wrapper"

function WorkExperience() {
    return (
        <div className="py-10">
            <Wrapper>
                <div>
                    <h1 className="text-gray-600 font-bold">WORK EXPERIENCE</h1>
                    <h2 className="text-3xl font-bold text-gray-700">Companies I have worked with.</h2>
                    <div className="grid grid-cols-1">
                        <div className="flex flex-col py-5">
                            <p className="text-6xl font-bold text-gray-700">01</p>
                            <p className="font-bold py-2"><span className="text-blue-500">Pareza Group Aps</span>, Frontend ReactJs Developer</p>
                            <p>I currently build scalable, high performance web applications.</p>
                        </div>
                            
                        <div className="flex flex-col py-5">
                            <p className="text-6xl font-bold text-gray-700">02</p>
                            <p className="font-bold py-2"><span className="text-yellow-500">Probase Group Limited</span>, Software Developer</p>
                            <p>I worked on AI, Machining Web development projects.</p>
                        </div>

                        <div className="flex flex-col py-5">
                            <p className="text-6xl font-bold text-gray-700">03</p>
                            <p className="font-bold py-2"><span className="text-green-500">Upwork</span>, Software Developer</p>
                            <p>I currently work on Front End project for around the world.</p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default WorkExperience
