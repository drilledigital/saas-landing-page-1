import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    Where power meets{" "}
                    <span className="text-lime-400">simplicity</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Real-time Collaboration"
                        description=" Work together seamlessly with conflict-editing"
                        className="md:col-span-2 lg:col-span-1"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="Avatar 1"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className=" z-30 -ml-6 border-indigo-500">
                                <Image
                                    src={avatar2}
                                    alt="Avatar 2"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="z-20 -ml-6  border-amber-500">
                                <Image
                                    src={avatar3}
                                    alt="Avatar 3"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="z-10 -ml-6  border-yellow-800">
                                <Image
                                    src={avatar4}
                                    alt="Avatar 4"
                                    className="rounded-full"
                                />
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Interactive Prototyping"
                        description="Engage your clients with prototypes that engage with user actions"
                        className="md:col-span-2 lg:col-span-1"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">
                                We've achieved{" "}
                                <span className="bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent">
                                    incredible
                                </span>{" "}
                                growth this year
                            </p>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Keyboard Quick Actions"
                        description=" Powerful commands to help you create designs
                                more quickly"
                        className="md:col-span-2 lg:col-span-1 md:col-start-2 lg-col-span-auto"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="w-28">shift</Key>
                            <Key>alt</Key>
                            <Key>C</Key>
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 item-center"
                        >
                            <span className="bg-lime-400 text-neutral-950 size-5 inline-flex items-center justify-center rounded-full text-xl">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-l">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
