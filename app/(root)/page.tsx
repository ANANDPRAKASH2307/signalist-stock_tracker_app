import TradingViewWidget from "@/components/TradingViewWidget";
import {
    MARKET_OVERVIEW_WIDGET_CONFIG,
    HEATMAP_WIDGET_CONFIG,
    TOP_STORIES_WIDGET_CONFIG,
    MARKET_DATA_WIDGET_CONFIG,
} from "@/lib/constants";

const Home = () => {
    const scriptUrl = 'https://s3.tradingview.com/external-embedding/embed-widget-';

    return (
        // Add a dark background to the entire page for better contrast
        <main className="bg-gray-900 min-h-screen p-8">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Card 1: Market Overview */}
                <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                    <h2 className="text-xl font-semibold text-gray-200 mb-4">Market Overview</h2>
                    <TradingViewWidget
                        scriptUrl={`${scriptUrl}market-overview.js`}
                        config={MARKET_OVERVIEW_WIDGET_CONFIG}
                        height={600}
                    />
                </div>

                {/* Card 2: Stock Heatmap */}
                <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                    <h2 className="text-xl font-semibold text-gray-200 mb-4">Stock Heatmap</h2>
                    <TradingViewWidget
                        scriptUrl={`${scriptUrl}stock-heatmap.js`}
                        config={HEATMAP_WIDGET_CONFIG}
                        height={600}
                    />
                </div>

                {/* Card 3: Top Stories */}
                <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                    <h2 className="text-xl font-semibold text-gray-200 mb-4">Top Stories</h2>
                    <TradingViewWidget
                        scriptUrl={`${scriptUrl}timeline.js`}
                        config={TOP_STORIES_WIDGET_CONFIG}
                        height={600}
                    />
                </div>

                {/* Card 4: Market Data */}
                <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                    <h2 className="text-xl font-semibold text-gray-200 mb-4">Market Data</h2>
                    <TradingViewWidget
                        scriptUrl={`${scriptUrl}market-quotes.js`}
                        config={MARKET_DATA_WIDGET_CONFIG}
                        height={600}
                    />
                </div>

            </section>
        </main>
    );
};

export default Home;