import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants/constants';
import { useLanguage } from '../contexts/LanguageContext';
import { GithubStatsData } from '../types/types';

interface StatCardProps {
    icon: string;
    value: number;
    label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => (
    <div className="flex flex-col items-center p-6 bg-light dark:bg-secondary rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
        <div className="text-3xl font-bold">{value}</div>
        <div className="text-gray-500 dark:text-gray-400 mt-1">{label}</div>
    </div>
);

const LoadingSkeleton: React.FC = () => (
     <div className="flex flex-col items-center p-6 bg-light dark:bg-secondary rounded-lg shadow-lg">
        <div className="w-10 h-10 bg-gray-300 dark:bg-accent rounded-full mb-3 animate-pulse"></div>
        <div className="w-16 h-8 bg-gray-300 dark:bg-accent rounded mb-2 animate-pulse"></div>
        <div className="w-24 h-5 bg-gray-300 dark:bg-accent rounded animate-pulse"></div>
    </div>
);

const GithubStats: React.FC = () => {
    const { t } = useLanguage();
    const [stats, setStats] = useState<GithubStatsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const userRes = await fetch(`https://api.github.com/users/${PERSONAL_INFO.githubUsername}`);
                if (!userRes.ok) throw new Error('Failed to fetch user data');
                const userData = await userRes.json();
                
                // Fetch all repos to sum stars
                const reposRes = await fetch(`https://api.github.com/users/${PERSONAL_INFO.githubUsername}/repos?per_page=100`);
                 if (!reposRes.ok) throw new Error('Failed to fetch repository data');
                const reposData = await reposRes.json();
                
                const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);

                setStats({
                    repos: userData.public_repos,
                    followers: userData.followers,
                    stars: totalStars
                });
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const statCards = [
        { icon: "git-branch-outline", label: t.github_stats.repos, value: stats?.repos },
        { icon: "people-outline", label: t.github_stats.followers, value: stats?.followers },
        { icon: "star-outline", label: t.github_stats.stars, value: stats?.stars },
    ];

    return (
        <section id="github-stats" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-2">{t.github_stats.title}</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-12"></div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {loading ? (
                        <>
                            <LoadingSkeleton />
                            <LoadingSkeleton />
                            <LoadingSkeleton />
                        </>
                    ) : error ? (
                        <p className="col-span-1 sm:col-span-3 text-center text-red-500">{t.github_stats.error}</p>
                    ) : (
                        statCards.map(card => (
                            <StatCard key={card.label} icon={card.icon} value={card.value ?? 0} label={card.label} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default GithubStats;