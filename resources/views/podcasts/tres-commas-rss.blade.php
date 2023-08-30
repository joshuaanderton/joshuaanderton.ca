
@php echo '<?xml version="1.0" encoding="UTF-8" ?>' @endphp
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:podcast="https://podcastindex.org/namespace/1.0">
  <channel>
    <atom:link rel="self" type="application/atom+xml" href="https://feeds.transistor.fm/ramen" title="MP3 Audio"/>
    <atom:link rel="hub" href="https://pubsubhubbub.appspot.com/"/>
    <podcast:podping usesPodping="true"/>
    <title>{{ $title }}</title>
    <generator>Polarize Technologies (https://polarize.tech)</generator>
    <itunes:new-feed-url>https://feeds.polarize.tech/{{ $subdomain }}</itunes:new-feed-url>
    <description>{{ $description }}</description>
    <copyright>© {{ date('Y') }} {{ $title }}</copyright>
    <podcast:guid>{{ $guid }}</podcast:guid>
    <podcast:locked owner="joshua@polarize.tech">no</podcast:locked>
    <podcast:trailer pubdate="Wed, 22 Sep 2021 14:30:15 +0000" url="https://media.transistor.fm/0f5c359e/a5050f08.mp3" length="12114342" type="audio/mpeg">It's a great time to SaaS</podcast:trailer>
    <podcast:trailer pubdate="Sun, 19 Jan 2020 05:00:00 +0000" url="https://media.transistor.fm/44f99ce9/f1c61ab5.mp3" length="26208843" type="audio/mpeg">The big Stripe dispute: a cautionary tale</podcast:trailer>
    <podcast:trailer pubdate="Wed, 14 Aug 2019 15:53:00 +0000" url="https://media.transistor.fm/a7f7ce2e/14ff1d31.mp3" length="12405798" type="audio/mpeg">Why I’m making a podcast about SaaS</podcast:trailer>
    <language>en</language>
    <pubDate>Wed, 30 Aug 2023 10:35:34 +0000</pubDate>
    <lastBuildDate>Wed, 30 Aug 2023 19:55:49 +0000</lastBuildDate>
    <link>http://ramen.fm</link>
    <image>
      <url>https://images.transistor.fm/file/transistor/images/show/4088/full_1567571248-artwork.jpg</url>
      <title>Getting To Ramen</title>
      <link>http://ramen.fm</link>
    </image>
    <itunes:category text="Business">
      <itunes:category text="Entrepreneurship"/>
    </itunes:category>
    <itunes:type>episodic</itunes:type>
    <itunes:author>{{ $author }}</itunes:author>
    <itunes:image href="https://images.transistor.fm/file/transistor/images/show/4088/full_1567571248-artwork.jpg"/>
    <itunes:summary>{{ $description }}</itunes:summary>
    <itunes:subtitle>{{ $description }}.</itunes:subtitle>
    <itunes:keywords>software,technology,business</itunes:keywords>
    <itunes:owner>
      <itunes:name>{{ $owner_name }}</itunes:name>
      <itunes:email>{{ $owner_email }}</itunes:email>
    </itunes:owner>
    <itunes:complete>No</itunes:complete>
    <itunes:explicit>No</itunes:explicit>
    @foreach ($episodes as $episode)
    <item>
      <title>{{ $episode['title'] }}</title>
      <itunes:episode>{{ $episode['number'] }}</itunes:episode>
      <podcast:episode>{{ $episode['number'] }}</podcast:episode>
      <itunes:title>{{ $episode['title'] }}</itunes:title>
      <itunes:episodeType>full</itunes:episodeType>
      <guid isPermaLink="false">95d55285-a3b1-410d-a9c0-fea8b7b736f7</guid>
      <link>https://share.transistor.fm/s/93e58741</link>
      <description>
        <![CDATA[{!! $episode['description'] !!}]]>
      </description>
      <content:encoded>
        <![CDATA[{!! $episode['description'] !!}]]>
      </content:encoded>
      <pubDate>Sat, 01 Feb 2020 08:00:00 +0000</pubDate>
      <author>{{ $author }}</author>
      <enclosure url="https://polarize.s3.us-west-2.amazonaws.com/podcasts/tres-commas/episode-1.mp3" length="22750965" type="audio/mpeg"/>
      <itunes:author>{{ $author }}</itunes:author>
      <itunes:image href="https://polarize.s3.us-west-2.amazonaws.com/podcasts/tres-commas/episode-1.png"/>
      <itunes:duration>945</itunes:duration>
      <itunes:keywords>software,technology,business</itunes:keywords>
      <itunes:explicit>No</itunes:explicit>
    </item>
    @endforeach
  </channel>
</rss>
